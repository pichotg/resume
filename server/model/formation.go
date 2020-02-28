package model

import "github.com/jinzhu/gorm"

type Formation struct {
	gorm.Model
	Formation   string `json:"formation"`
	Detail      string `json:"detail"`
	Periode     string `json:"periode"`
	Description string `json:"description"`
	Adresse     string `json:"adresse"`
	// Programme   []string `json:"programme"`
	// Tags        []string `json:"tags"`
}
