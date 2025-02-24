package com.seechange.fake_store.restController;

public class GetProductRequest {
	private String sort;
	private Integer limit;
	private String categoryName;

	public GetProductRequest(String sort, Integer limit, String categoryName) {
		super();
		this.sort = sort;
		this.limit = limit;
		this.categoryName = categoryName;
	}

	public String getSort() {
		return sort;
	}

	public void setSort(String sort) {
		this.sort = sort;
	}

	public Integer getLimit() {
		return limit;
	}

	public void setLimit(Integer limit) {
		this.limit = limit;
	}

	public String getCategoryName() {
		return categoryName;
	}

	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}

}
