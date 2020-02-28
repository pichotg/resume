package api

import (
	"net/http"

	"github.com/labstack/echo"
	"github.com/pichotg/resume/server/db"
	"github.com/pichotg/resume/server/model"
)

func GetFormations(c echo.Context) error {
	var data []model.Formation
	db.Manager().Find(&data)
	return c.JSON(http.StatusOK, data)
}
