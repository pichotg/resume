package routes

import (
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"github.com/pichotg/resume/server/api"
)

func Start(debug bool) *echo.Echo {
	e := echo.New()
	if debug {
		e.Use(middleware.Logger())
		e.Use(middleware.CORS())
	}

	e.GET("/api/technologies", api.GetTechnologies)

	return e
}
