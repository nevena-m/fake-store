package model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public record Product(Integer id, String title, Float price, String description, String category, String image,
		Rating rating) {

}
