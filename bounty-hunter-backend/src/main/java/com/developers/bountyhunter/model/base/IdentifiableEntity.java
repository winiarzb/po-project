package com.developers.bountyhunter.model.base;

import lombok.Data;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Version;
import javax.xml.bind.annotation.XmlTransient;
import java.io.Serializable;
import java.util.Date;

@MappedSuperclass
@Data
public abstract class IdentifiableEntity implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Version
	@XmlTransient
	private Integer version;

	@Temporal(TemporalType.TIMESTAMP)
	private Date recordCreationDate;

	@Temporal(TemporalType.TIMESTAMP)
	private Date recordModificationDate;

	@PrePersist
	private void prePersist() {
		this.recordCreationDate = new Date();
	}

	@PreUpdate
	private void preUpdate() {
		this.recordModificationDate = new Date();
	}


}
