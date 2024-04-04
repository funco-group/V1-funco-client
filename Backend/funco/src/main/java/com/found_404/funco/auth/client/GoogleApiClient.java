package com.found_404.funco.auth.client;

import static org.springframework.http.MediaType.*;

import org.springframework.http.HttpHeaders;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.service.annotation.GetExchange;
import org.springframework.web.service.annotation.PostExchange;

import com.found_404.funco.auth.dto.GoogleToken;
import com.found_404.funco.auth.dto.response.GoogleMemberResponse;

public interface GoogleApiClient {

	@PostExchange(url = "https://oauth2.googleapis.com/token", contentType = APPLICATION_FORM_URLENCODED_VALUE)
	GoogleToken fetchToken(@RequestParam MultiValueMap<String, String> params);

	@GetExchange("https://www.googleapis.com/oauth2/v2/userinfo")
	GoogleMemberResponse fetchMember(@RequestHeader(name = HttpHeaders.AUTHORIZATION) String bearerToken);
}