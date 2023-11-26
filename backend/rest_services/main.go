package main

import (
	"database/sql"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
)

type Img struct {
	ImgId   int    `json:"imgId"`
	ImgPath string `json:"imgPath"`
}

type Club struct {
	ClubId    int    `json:"clubId"`
	ClubName  string `json:"clubName"`
	ClubDesc  string `json:"clubDesc"`
	ClubImgId int    `json:"clubImgId"`
}

type Grant struct {
	GrantId      int    `json:"grantId"`
	GrantName    string `json:"grantName"`
	GrantProject string `json:"grantProject"`
	GrantDesc    string `json:"grantDesc"`
}

var db *sql.DB

func corsMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}

func main() {

	db, _ = sql.Open("mysql", "root:root@tcp(localhost:3306)/gosprinters")

	r := gin.New()
	r.Use(corsMiddleware())

	r.GET("/getImages", getAllImages)
	r.GET("/getClubs", getAllClubs)
	r.GET("/getGrants", getAllGrants)

	r.Run()

}

// new
func errCheck(err error) {
	if err != nil {
		log.Fatal(err)
		return
	}
}

func getAllImages(c *gin.Context) {
	// note err has already been defined earlier as well as the errCheck function
	var imagesList []Img
	images, err := db.Query("SELECT * FROM ImgTable")
	// errCheck(err)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error":   err.Error(),
			"message": "The data you are looking for is not present",
		})
		return
	}

	for images.Next() {
		var img1 Img
		err = images.Scan(&img1.ImgId, &img1.ImgPath)
		errCheck(err)
		// log.Printf(img1.imgPath)
		imagesList = append(imagesList, img1)

	}
	c.JSON(http.StatusOK, imagesList)
}

func getAllClubs(c *gin.Context) {
	// note err has already been defined earlier as well as the errCheck function
	var clubsList []Club
	clubs, err := db.Query("SELECT * FROM ClubTable")
	// errCheck(err)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error":   err.Error(),
			"message": "The data you are looking for is not present",
		})
		return
	}

	for clubs.Next() {
		var club1 Club
		err = clubs.Scan(&club1.ClubId, &club1.ClubName, &club1.ClubDesc, &club1.ClubImgId)
		errCheck(err)
		// log.Printf(img1.imgPath)
		clubsList = append(clubsList, club1)

	}
	c.JSON(http.StatusOK, clubsList)
}

func getAllGrants(c *gin.Context) {
	// note err has already been defined earlier as well as the errCheck function
	var grantsList []Grant
	grants, err := db.Query("SELECT * FROM GrantTable")
	// errCheck(err)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"error":   err.Error(),
			"message": "The data you are looking for is not present",
		})
		return
	}

	for grants.Next() {
		var grant1 Grant
		err = grants.Scan(&grant1.GrantId, &grant1.GrantName, &grant1.GrantProject, &grant1.GrantDesc)
		errCheck(err)
		// log.Printf(img1.imgPath)
		grantsList = append(grantsList, grant1)

	}
	c.JSON(http.StatusOK, grantsList)
}
