package model

type Experience struct {
	Poste       string   `json:"poste,omitempty"`
	Entreprise  string   `json:"entreprise,omitempty"`
	Periode     string   `json:"periode,omitempty"`
	Description string   `json:"description,omitempty"`
	Tags        []string `json:"tags,omitempty"`
	Adresse     string   `json:"adresse,omitempty"`
}
