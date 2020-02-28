package api

import (
	"net/http"

	"github.com/labstack/echo"
	"github.com/pichotg/resume/server/db"
	"github.com/pichotg/resume/server/model"
)

func GetExperiences(c echo.Context) error {
	var data []model.Experience
	db.Manager().Find(&data)
	return c.JSON(http.StatusOK, data)
}
