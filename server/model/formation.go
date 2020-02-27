package model

type Formation struct {
	Formation   string   `json:"formation,omitempty"`
	Detail      string   `json:"detail,omitempty"`
	Periode     string   `json:"periode,omitempty"`
	Description string   `json:"description,omitempty"`
	Adresse     string   `json:"adresse,omitempty"`
	Programme   []string `json:"programme,omitempty"`
	Tags        []string `json:"tags,omitempty"`
}
