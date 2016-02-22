package org.wicket_kkato.learning.isd;

import org.apache.wicket.markup.html.WebPage;
import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.model.IModel;

public class ProductList extends WebPage{
	private static final long serialVersionUID = 1L;
	public ProductList(IModel<String> nameModel){
		Label nameLabel = new Label("name",nameModel);

		add(nameLabel);
	}

}
