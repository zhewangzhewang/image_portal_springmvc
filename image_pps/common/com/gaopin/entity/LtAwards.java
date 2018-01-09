package com.gaopin.entity;

// Generated Nov 13, 2015 9:48:02 AM by Hibernate Tools 3.4.0.CR1

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * LtAwards generated by hbm2java
 */
@Entity
@Table(name = "lt_awards", catalog = "gaopin_images")
public class LtAwards implements java.io.Serializable {

	private Integer id;
	private String name;
	private String description;
	private Integer awardclass;
	private Integer status;
	private Date createTime;
	private Date expireTime;

	public LtAwards() {
	}

	public LtAwards(String name, String description, Integer awardclass,
			Integer status, Date createTime, Date expireTime) {
		this.name = name;
		this.description = description;
		this.awardclass = awardclass;
		this.status = status;
		this.createTime = createTime;
		this.expireTime = expireTime;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)
	@Column(name = "id", unique = true, nullable = false)
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Column(name = "name", length = 50)
	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Column(name = "description", length = 100)
	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Column(name = "awardclass")
	public Integer getAwardclass() {
		return this.awardclass;
	}

	public void setAwardclass(Integer awardclass) {
		this.awardclass = awardclass;
	}

	@Column(name = "status")
	public Integer getStatus() {
		return this.status;
	}

	public void setStatus(Integer status) {
		this.status = status;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "create_time", length = 19)
	public Date getCreateTime() {
		return this.createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "expire_time", length = 19)
	public Date getExpireTime() {
		return this.expireTime;
	}

	public void setExpireTime(Date expireTime) {
		this.expireTime = expireTime;
	}

}
