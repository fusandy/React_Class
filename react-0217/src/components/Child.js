import PropTypes from 'prop-types';

function Child(props) {
  console.log('Child props:', props);
  return (
    <>
      {props.text}, {props.name}
    </>
  );
}

Child.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

Child.defalutProps = {
  text: 'Hi',
  name: 'Noname',
};

export default Child;
