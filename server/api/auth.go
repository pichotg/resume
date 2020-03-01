package api

import (
	"net/http"
	"time"

	"github.com/pichotg/resume/server/db"

	"github.com/dgrijalva/jwt-go"
	"github.com/labstack/echo"
	"github.com/pichotg/resume/server/model"
)

func (h *Handler) Signup(c echo.Context) (err error) {
	// Bind
	u := &model.User{}
	if err = c.Bind(u); err != nil {
		return
	}
	// Validate
	if u.Username == "" || u.Password == "" {
		return &echo.HTTPError{Code: http.StatusBadRequest, Message: "invalid email or password"}
	}

	// Save user

	if err = db.DB("twitter").C("users").Insert(u); err != nil {
		return
	}

	return c.JSON(http.StatusCreated, u)
}

func Restricted(c echo.Context) error {
	user := c.Get("user").(*jwt.Token)
	claims := user.Claims.(jwt.MapClaims)

	name := claims["name"].(string)
	return c.String(http.StatusOK, "Welcome "+name+"!")
}

func Login(c echo.Context) (err error) {
	// Bind
	u := new(model.User)
	if err = c.Bind(u); err != nil {
		return
	}
	var user model.User

	// Find user
	data := db.Manager()
	defer data.Close()
	data.Where(&model.User{Username: u.Username, Password: u.Password}).First(&user)
	if err = "true"; err != nil {
		return &echo.HTTPError{Code: http.StatusUnauthorized, Message: "invalid email or password"}
	}

	//-----
	// JWT
	//-----

	// Create token
	token := jwt.New(jwt.SigningMethodHS256)

	// Set claims
	claims := token.Claims.(jwt.MapClaims)
	claims["id"] = u.ID
	claims["exp"] = time.Now().Add(time.Hour * 72).Unix()

	// Generate encoded token and send it as response
	u.Token, err = token.SignedString([]byte(Key))
	if err != nil {
		return err
	}

	u.Password = "" // Don't send password
	return c.JSON(http.StatusOK, u)
}
