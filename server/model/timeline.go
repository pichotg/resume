package model

type TimeLine struct {
	Title       string   `json:"title,omitempty"`
	Subtitle    string   `json:"subtitle,omitempty"`
	Description string   `json:"description,omitempty"`
	Periode     string   `json:"periode,omitempty"`
	Programme   []string `json:"programme,omitempty"`
	Now         bool     `json:"now,omitempty"`
}
