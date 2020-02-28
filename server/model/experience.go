package model

import "github.com/jinzhu/gorm"

type Experience struct {
	gorm.Model
	Poste       string `json:"poste"`
	Entreprise  string `json:"entreprise"`
	Periode     string `json:"periode"`
	Description string `json:"description"`
	// Tags        []string `json:"tags"`
	Adresse string `json:"adresse"`
}
