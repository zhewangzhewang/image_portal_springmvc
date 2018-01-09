/**
 * 
 */
package com.gaopin.frame.hibernate;

import java.io.Serializable;
import java.util.Collection;

import org.hibernate.criterion.Criterion;
import org.hibernate.criterion.Restrictions;

@SuppressWarnings("serial")
public class InExpression implements Serializable, HibernateExpression {

	Object[] values;
	String propertyName;

	public InExpression(String propertyName, Object[] values) {
		this.propertyName = propertyName;
		this.values = values;
	}

	@SuppressWarnings("rawtypes")
	public InExpression(String propertyName, Collection values) {
		this.propertyName = propertyName;
		this.values = values.toArray();
	}

	public Criterion createCriteria() {

		return Restrictions.in(propertyName, values);
	}

}