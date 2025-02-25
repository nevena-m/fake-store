package com.seechange.fake_store.restController;

import java.util.ArrayList;

import model.Product;

public class GetProductResponse {
	private ArrayList<Product> productList;
	private Integer totalCount;

	public GetProductResponse(ArrayList<Product> productList) {
		super();
		this.productList = productList;
		this.totalCount = productList.size();
	}

	public ArrayList<Product> getProductList() {
		return productList;
	}

	public void setProductList(ArrayList<Product> productList) {
		this.productList = productList;
	}

	public Integer getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(Integer totalCount) {
		this.totalCount = totalCount;
	}

}
