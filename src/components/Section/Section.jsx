import PropTypes from 'prop-types';
import "./section.css"

export const Section= ({ children }) => {
	return <section className="section">{children}</section>;
}
Section.propTypes = {
	children: PropTypes.node,
}