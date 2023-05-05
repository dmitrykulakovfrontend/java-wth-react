package com.atomeistee.reactWithJava.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Getter
@Setter
@Table(name = "contracts")
public class Contract {
    @ManyToOne(fetch=FetchType.LAZY, cascade=CascadeType.ALL)
    @JsonBackReference
    private Company company;
    @Id
    @Column(name = "id_contract")
    private Long id;
//    @Column(name = "id_procedure")
//    private Long procedureId;
    @Column(name = "customer_kpp")
    private Long customerKpp;
    @Column(name = "protocol_date")
    private String protocolDate;
    @Column(name = "sign_date")
    private String signDate;
    @Column(name = "min_publish_date")
    private String minPublishDate;
    @Column(name = "contract_subject")
    private String contractSubject;
    @Column(name = "contract_price_rub")
    private String contractPriceRub;
    @Column(name = "advance_sum_percents")
    private String advanceSumPercents;
    @Column(name = "subcontractor_sum_percents")
    private String subcontractorSumPercents;
    @Column(name = "execution_start_date")
    private String executionStartDate;
    @Column(name = "execution_end_date")
    private String executionEndDate;
    @Column(name = "enforcement_type")
    private String enforcementType;
    @Column(name = "enforcement_amount_rub")
    private String enforcementAmountRub;
    @Column(name = "supplier_inn")
    private Long supplierInn;
    @Column(name = "supplier_kpp")
    private Long supplierKpp;


}
