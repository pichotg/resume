package api

import (
	"net/http"

	"github.com/labstack/echo"
	"github.com/pichotg/resume/server/db"
	"github.com/pichotg/resume/server/model"
)

func GetTechnologies(c echo.Context) error {
	var techs []model.Technologie

	db.Manager().Find(&techs)

	return c.JSON(http.StatusOK, techs)

}
