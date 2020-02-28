package db

import (
	"github.com/jinzhu/gorm"
	"github.com/pichotg/resume/server/model"
)

var db *gorm.DB
var err error

func New(log bool) {

	db, err = gorm.Open("sqlite3", ":memory:")
	if err != nil {
		panic(err)
	}
	db.LogMode(log)

	db.AutoMigrate(
		&model.User{},
		&model.Technologie{},
		&model.Experience{},
		&model.Formation{},
	)
}

func Manager() *gorm.DB {
	return db
}
