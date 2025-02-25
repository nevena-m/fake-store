package com.seechange.fake_store.restController;

import java.net.MalformedURLException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

import org.apache.http.client.utils.URIBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import model.Product;

@RestController
@RequestMapping("product")
public class FakeStoreRestController {

	// TODO: create a new class for managing other api and building uri-s that will
	// serve as a "database" in our case
	private String baseFakeApiUrl = "https://fakestoreapi.com/";

	@Autowired
	private RestTemplate fakeStoreRestTemplate;

	// TODO: Add exception handlers on a higher lvl and standardize error message
	// responses

	@PostMapping(value = "/filter", produces = "application/json")
	public ResponseEntity<GetProductResponse> getProducts(@RequestBody GetProductRequest request)
			throws RestClientException, MalformedURLException, URISyntaxException {
		// TODO: Handle and test other exceptions that can occur, even in case of
		// misspelling words
		ResponseEntity<ArrayList<Product>> productsResponse;
		if (request.getCategoryName() == null || request.getCategoryName().isBlank()) {
			URIBuilder b;
			try {
				b = new URIBuilder(baseFakeApiUrl.concat("products"));
				
				if(request.getSort() != null) {
					b.addParameter("sort", request.getSort());					
				}
				if(request.getLimit() != null) {
					b.addParameter("limit", request.getLimit().toString());					
				}
				productsResponse = fakeStoreRestTemplate.exchange(b.build().toURL().toURI(), HttpMethod.GET, null,
						new ParameterizedTypeReference<ArrayList<Product>>() {
						});
				
				return new ResponseEntity<GetProductResponse>(new GetProductResponse(productsResponse.getBody()),
						HttpStatus.OK);
			} catch (URISyntaxException e) {
				e.printStackTrace();
			}
		} else {
			productsResponse = fakeStoreRestTemplate.exchange(
					baseFakeApiUrl.concat("products/category/").concat(request.getCategoryName().strip()),
					HttpMethod.GET, null, new ParameterizedTypeReference<ArrayList<Product>>() {
					});
			return new ResponseEntity<GetProductResponse>(new GetProductResponse(productsResponse.getBody()),
					HttpStatus.OK);
		}
		return new ResponseEntity<GetProductResponse>(new GetProductResponse(new ArrayList<Product>()), HttpStatus.OK);
	}

	@GetMapping("/categories")
	public ResponseEntity<ArrayList<String>> getCategories() {
		// TODO: Handle and test other exceptions that can occur, even in case of
		// misspelling words
		ResponseEntity<ArrayList<String>> categoriesResponse = fakeStoreRestTemplate.exchange(
				baseFakeApiUrl.concat("products/categories"), HttpMethod.GET, null,
				new ParameterizedTypeReference<ArrayList<String>>() {
				});
		return new ResponseEntity<ArrayList<String>>(categoriesResponse.getBody(), HttpStatus.OK);
	}

}
