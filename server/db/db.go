package db

import (
	"context"
	"log"
	"wikiapp/model"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

type DB interface {
	GetTimeLines() ([]*model.TimeLine, error)
}

type MongoDB struct {
	collection *mongo.Collection
}

func NewMongo(client *mongo.Client) DB {
	timeline := client.Database("wiki").Collection("timeline")
	return MongoDB{collection: timeline}
}

func (m MongoDB) GetTimeLines() ([]*model.TimeLine, error) {
	res, err := m.collection.Find(context.TODO(), bson.M{})
	if err != nil {
		log.Println("Error while fetching technologies:", err.Error())
		return nil, err
	}
	var tech []*model.TimeLine
	err = res.All(context.TODO(), &tech)
	if err != nil {
		log.Println("Error while decoding technologies:", err.Error())
		return nil, err
	}
	return tech, nil
}

func (m MongoDB) PUTimeLine() ([]*model.TimeLine, error) {
	res, err := m.collection.Find(context.TODO(), bson.M{})
	if err != nil {
		log.Println("Error while fetching technologies:", err.Error())
		return nil, err
	}
	var tech []*model.TimeLine
	err = res.All(context.TODO(), &tech)
	if err != nil {
		log.Println("Error while decoding technologies:", err.Error())
		return nil, err
	}
	return tech, nil
}
