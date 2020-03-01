package routes

import (
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"github.com/pichotg/resume/server/api"
)

func Start(debug bool) *echo.Echo {
	e := echo.New()
	if debug {
		e.Use(middleware.LoggerWithConfig(middleware.LoggerConfig{
			Format: "method=${method}, uri=${uri}, status=${status}\n",
		}))
		e.Use(middleware.CORS())
	}

	API := e.Group("api")
	API.POST("/login", api.Login)
	API.GET("/technologies", api.GetTechnologies)

	admin := API.Group("/admin")
	admin.Use(middleware.JWT([]byte("secret")))
	admin.GET("/technologies", api.GetTechnologies)

	return e
}
