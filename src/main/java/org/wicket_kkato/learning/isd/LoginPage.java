package org.wicket_kkato.learning.isd;

import org.apache.wicket.markup.html.WebPage;
import org.apache.wicket.markup.html.form.Form;
import org.apache.wicket.markup.html.form.TextField;
import org.apache.wicket.markup.html.link.Link;
import org.apache.wicket.model.IModel;
import org.apache.wicket.model.Model;

public class LoginPage extends WebPage{
	private static final long serialVersionUID = 1L;

	private IModel<String> nameModel;
	private IModel<String> passwordModel;

	public LoginPage(){
		nameModel = new Model<>("");
		passwordModel = new Model<>("");

		Form<Void> form = new Form<Void>("form"){
			private static final long serialVersionUID = 1L;

			protected void onSubmit(){
				super.onSubmit();
				System.out.println("name : " + nameModel.getObject());
				System.out.println("password : " + passwordModel.getObject());
				setResponsePage(new ProductList(nameModel));
			}
		};
		add(form);

		TextField<String> nameField = new TextField<>("name",nameModel);
		form.add(nameField);
		TextField<String> passwordField = new TextField<>("password",passwordModel);
		form.add(passwordField);


		add(new Link<Void>("link"){
			@Override
			public void onClick() {
				setResponsePage(Calendar.class);

			}
		});

	}

}
