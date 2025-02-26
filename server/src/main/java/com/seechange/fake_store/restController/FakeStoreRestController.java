package com.seechange.fake_store.restController;

import java.net.MalformedURLException;
import java.net.URISyntaxException;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClientException;

@RestController
@RequestMapping(path = "product/")
public class FakeStoreRestController {

	@Autowired
	FakeStoreRemoteAccess fakeStoreRemoteAccess;

	@PostMapping(value = "filter", produces = "application/json")
	public ResponseEntity<GetProductResponse> getProducts(@RequestBody GetProductRequest request)
			throws RestClientException, MalformedURLException, URISyntaxException { 
		return new ResponseEntity<GetProductResponse>(
				new GetProductResponse(fakeStoreRemoteAccess.filterProducts(request)), HttpStatus.OK);
	}

	@GetMapping("categories")
	public ResponseEntity<ArrayList<String>> getCategories() {
		return new ResponseEntity<ArrayList<String>>(fakeStoreRemoteAccess.getCategories(), HttpStatus.OK);
	}

}
