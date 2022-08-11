import { Card } from "../../components";
const Contact = () => {
	return (
		<>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.6433545969107!2d106.65728971483645!3d10.761945462403515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eee8c448bf1%3A0x93df9d2015fc5d94!2zMTAwMCBWxKluaCBWaeG7hW4sIFBoxrDhu51uZyA3LCBRdeG6rW4gMTEsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1653488894993!5m2!1sen!2s"
				width="100%"
				height="450"
				style={{ border: 0 }}
				allowFullScreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
				title="location"
			></iframe>

			<Card center>
				<Card.Title>CONTACT US</Card.Title>
				<Card.Text>
					As you might expect from a big company like us, we pay
					strict attention.
				</Card.Text>
				<Card.Text>
					<i className="fas fa-map-marker-alt"></i> Vinh Vien Street,
					Ward 07, District 11, HCMC
				</Card.Text>
				<Card.Text>
					<i className="fas fa-envelope"></i>{" "}
					phongtran270997@gmail.com
				</Card.Text>
				<Card.Text>
					<i className="fas fa-mobile-alt"></i> +84908227738
				</Card.Text>
			</Card>
		</>
	);
};

export default Contact;
