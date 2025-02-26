package com.seechange.fake_store.restController;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import model.ErrorResponse;

@ControllerAdvice
public class FakeStoreExeptionHandler {
	
	@ExceptionHandler
	public ResponseEntity<ErrorResponse> handleAllExceptions(Exception ex){
			
		ErrorResponse response = new ErrorResponse("error", "An error occured, please try again");
		
		return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
	}
	
}
