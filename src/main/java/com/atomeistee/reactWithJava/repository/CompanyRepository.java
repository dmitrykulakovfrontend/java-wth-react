package com.atomeistee.reactWithJava.repository;

import com.atomeistee.reactWithJava.model.Company;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompanyRepository extends JpaRepository<Company, Long> {

    public Company findByInn(Long inn);
}
