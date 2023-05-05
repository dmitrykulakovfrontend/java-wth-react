package com.atomeistee.reactWithJava.controller;

import com.atomeistee.reactWithJava.model.Company;
import com.atomeistee.reactWithJava.model.Customer;
import com.atomeistee.reactWithJava.repository.CompanyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController()
@RequestMapping("/api")
public class CompanyController {
    @Autowired
    CompanyRepository companyRepository;

    @GetMapping("/company/{inn}")
    public ResponseEntity<Company> getCompanyByInn(@PathVariable("inn") long inn) {
        try {
            //check if employee exist in database
            Company company = getCompany(inn);

            if (company != null) {
                return new ResponseEntity<>(company, HttpStatus.OK);
            }

            return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
    private Company getCompany(long inn) {
        Optional<Company> companyObj = Optional.ofNullable(companyRepository.findByInn(inn));

        return companyObj.orElse(null);
    }
}
