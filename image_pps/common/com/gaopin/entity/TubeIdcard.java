package com.gaopin.entity;

// Generated Dec 18, 2015 2:32:33 PM by Hibernate Tools 3.4.0.CR1

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
 * TubeIdcard generated by hbm2java
 */
@Entity
@Table(name = "tube_idcard")
public class TubeIdcard implements java.io.Serializable {

	private Integer id;
	private Integer userid;
	private String useruuid;
	private String realname;
	private String cardnumber;
	private Integer gender;
	private String contactinfo;
	private Date birthday;
	private String fileid;
	private Date dateupload;

	public TubeIdcard() {
	}

	public TubeIdcard(Integer userid, String useruuid, String realname,
			String cardnumber, Integer gender, String contactinfo,
			Date birthday, String fileid, Date dateupload) {
		this.userid = userid;
		this.useruuid = useruuid;
		this.realname = realname;
		this.cardnumber = cardnumber;
		this.gender = gender;
		this.contactinfo = contactinfo;
		this.birthday = birthday;
		this.fileid = fileid;
		this.dateupload = dateupload;
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

	@Column(name = "userid")
	public Integer getUserid() {
		return this.userid;
	}

	public void setUserid(Integer userid) {
		this.userid = userid;
	}

	@Column(name = "useruuid", length = 50)
	public String getUseruuid() {
		return this.useruuid;
	}

	public void setUseruuid(String useruuid) {
		this.useruuid = useruuid;
	}

	@Column(name = "realname", length = 20)
	public String getRealname() {
		return this.realname;
	}

	public void setRealname(String realname) {
		this.realname = realname;
	}

	@Column(name = "cardnumber", length = 50)
	public String getCardnumber() {
		return this.cardnumber;
	}

	public void setCardnumber(String cardnumber) {
		this.cardnumber = cardnumber;
	}

	@Column(name = "gender")
	public Integer getGender() {
		return this.gender;
	}

	public void setGender(Integer gender) {
		this.gender = gender;
	}

	@Column(name = "contactinfo", length = 1000)
	public String getContactinfo() {
		return this.contactinfo;
	}

	public void setContactinfo(String contactinfo) {
		this.contactinfo = contactinfo;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "birthday", length = 10)
	public Date getBirthday() {
		return this.birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	@Column(name = "fileid", length = 50)
	public String getFileid() {
		return this.fileid;
	}

	public void setFileid(String fileid) {
		this.fileid = fileid;
	}

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "dateupload", length = 19)
	public Date getDateupload() {
		return this.dateupload;
	}

	public void setDateupload(Date dateupload) {
		this.dateupload = dateupload;
	}

}
