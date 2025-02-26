package com.seechange.fake_store.restController;

import java.net.MalformedURLException;
import java.net.URISyntaxException;
import java.util.ArrayList;

import org.apache.http.client.utils.URIBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;

import model.Product;

// could implement an interface that "standardizes" filters and return values
// in case we change the "database"
@Service
public class FakeStoreRemoteAccess {

	@Autowired
	private RestTemplate fakeStoreRestTemplate;

	private String baseFakeApiUrl = "https://fakestoreapi.com/";

	public FakeStoreRemoteAccess() {
		super();
	}

	public ArrayList<Product> filterProducts(GetProductRequest filter) {
		ResponseEntity<ArrayList<Product>> productsResponse;
		if (filter.getCategoryName() == null || filter.getCategoryName().isBlank()) {
			URIBuilder b;
			try {
				b = new URIBuilder(baseFakeApiUrl.concat("products"));

				if (filter.getSort() != null) {
					b.addParameter("sort", filter.getSort());
				}
				if (filter.getLimit() != null) {
					b.addParameter("limit", filter.getLimit().toString());
				}
				productsResponse = fakeStoreRestTemplate.exchange(b.build().toURL().toURI(), HttpMethod.GET, null,
						new ParameterizedTypeReference<ArrayList<Product>>() {
						});

				return productsResponse.getBody();
			} catch (URISyntaxException | RestClientException | MalformedURLException e) {
				e.printStackTrace();
			}
		} else {
			productsResponse = fakeStoreRestTemplate.exchange(
					baseFakeApiUrl.concat("products/category/").concat(filter.getCategoryName().strip()),
					HttpMethod.GET, null, new ParameterizedTypeReference<ArrayList<Product>>() {
					});
			return productsResponse.getBody();
		}
		return new ArrayList<Product>();
	}
	
	public ArrayList<String> getCategories(){
		ResponseEntity<ArrayList<String>> categoriesResponse = fakeStoreRestTemplate.exchange(
				baseFakeApiUrl.concat("products/categories"), HttpMethod.GET, null,
				new ParameterizedTypeReference<ArrayList<String>>() {
				});
		ArrayList<String> body =categoriesResponse.getBody();
		if(body.isEmpty()) {
			return new ArrayList<String>();
		}
		return body;
	}

}
