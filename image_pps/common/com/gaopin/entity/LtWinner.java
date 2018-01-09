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
 * LtWinner generated by hbm2java
 */
@Entity
@Table(name = "lt_winner", catalog = "gaopin_images")
public class LtWinner implements java.io.Serializable {

	private Integer id;
	private Integer userId;
	private Integer awardId;
	private String userEmail;
	private String userName;
	private String contactInfo;
	private Date createTime;
	private String keyword;
	private Integer givingOut;
	private String userIp;

	public LtWinner() {
	}

	public LtWinner(Integer userId, Integer awardId, String userEmail,
			String userName, String contactInfo, Date createTime,
			String keyword, Integer givingOut, String userIp) {
		this.userId = userId;
		this.awardId = awardId;
		this.userEmail = userEmail;
		this.userName = userName;
		this.contactInfo = contactInfo;
		this.createTime = createTime;
		this.keyword = keyword;
		this.givingOut = givingOut;
		this.userIp = userIp;
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

	@Column(name = "user_id")
	public Integer getUserId() {
		return this.userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	@Column(name = "award_id")
	public Integer getAwardId() {
		return this.awardId;
	}

	public void setAwardId(Integer awardId) {
		this.awardId = awardId;
	}

	@Column(name = "user_email", length = 50)
	public String getUserEmail() {
		return this.userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	@Column(name = "user_name", length = 50)
	public String getUserName() {
		return this.userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	@Column(name = "contact_info", length = 4000)
	public String getContactInfo() {
		return this.contactInfo;
	}

	public void setContactInfo(String contactInfo) {
		this.contactInfo = contactInfo;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "create_time", length = 19)
	public Date getCreateTime() {
		return this.createTime;
	}

	public void setCreateTime(Date createTime) {
		this.createTime = createTime;
	}

	@Column(name = "keyword", length = 50)
	public String getKeyword() {
		return this.keyword;
	}

	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}

	@Column(name = "giving_out")
	public Integer getGivingOut() {
		return this.givingOut;
	}

	public void setGivingOut(Integer givingOut) {
		this.givingOut = givingOut;
	}

	@Column(name = "user_ip", length = 50)
	public String getUserIp() {
		return this.userIp;
	}

	public void setUserIp(String userIp) {
		this.userIp = userIp;
	}

}
