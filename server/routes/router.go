package routes

import (
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"github.com/pichotg/resume/server/api"
)

func Init() *echo.Echo {
	e := echo.New()
	e.Use(middleware.Logger())
	e.Use(middleware.CORS())

	e.GET("/api/technologies", api.GetTechnologies)

	return e
}
