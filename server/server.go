package main

import (
	"flag"

	"github.com/pichotg/resume/server/model"
	"github.com/pichotg/resume/server/routes"

	_ "github.com/jinzhu/gorm/dialects/sqlite"
	"github.com/pichotg/resume/server/db"
)

func main() {
	debug := flag.Bool("debug", true, "log database")
	fixtures := flag.Bool("f", true, "load fixtures")
	flag.Parse()

	db.New(*debug)
	route := routes.Start(*debug)

	if *fixtures {
		manager := db.Manager()
		for i := 0; i < 10; i++ {
			tech := model.Technologie{Name: "go", Details: "An open source programming language that makes it easy to build simple and efficient software."}
			if manager.NewRecord(tech) {
				manager.Create(&tech)
			}
		}
	}

	route.Logger.Fatal(route.Start(":8080"))
}
