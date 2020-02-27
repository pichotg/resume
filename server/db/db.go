package db

import (
	"context"
	"log"
	"wikiapp/model"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type DB interface {
	GetExperiences() ([]*model.Experience, error)
	GetFormations() ([]*model.Formation, error)
}
type MongoDB struct {
	collections map[string]*mongo.Collection
}

func NewMongo(client *mongo.Client) DB {
	collections := make(map[string]*mongo.Collection)
	collections["formation"] = client.Database("wiki").Collection("formation")
	collections["experience"] = client.Database("wiki").Collection("experience")
	return MongoDB{collections}
}

func (m MongoDB) GetFormations() ([]*model.Formation, error) {
	res, err := m.collections["formation"].Find(context.TODO(), bson.M{})
	if err != nil {
		log.Println("Error while fetching Formation:", err.Error())
		return nil, err
	}
	var tech []*model.Formation
	err = res.All(context.TODO(), &tech)
	if err != nil {
		log.Println("Error while decoding Formation:", err.Error())
		return nil, err
	}
	return tech, nil
}

func (m MongoDB) GetExperiences() ([]*model.Experience, error) {
	res, err := m.collections["experience"].Find(context.TODO(), bson.M{})
	if err != nil {
		log.Println("Error while fetching experience:", err.Error())
		return nil, err
	}
	var tech []*model.Experience
	err = res.All(context.TODO(), &tech)
	if err != nil {
		log.Println("Error while decoding experience:", err.Error())
		return nil, err
	}
	return tech, nil
}
