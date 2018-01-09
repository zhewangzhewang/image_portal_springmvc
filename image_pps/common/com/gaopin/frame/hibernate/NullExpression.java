/**
 * 
 */
package com.gaopin.frame.hibernate;

import java.io.Serializable;

import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Restrictions;

/**
 * <p>空判断</p>
 *
 */
@SuppressWarnings("serial")
public class NullExpression implements HibernateExpression, Serializable {

	String propertyName;
	
	public NullExpression(String propertyName)
	{
		this.propertyName = propertyName;
	}
	public Criterion createCriteria() {
		
		return Restrictions.isNull(propertyName);
	}

}
