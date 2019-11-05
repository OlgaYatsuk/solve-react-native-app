import React, {Component} from 'react';
import {connect} from 'react-redux';
import CardFormInfo from '../CardFormScreen/CardFormInfo/CardFormInfo';
import {updateCardData} from '../../actions/updateCardData';
import {ValidationStatus} from '../../utils/validationStatus';

type State = {
  cardType: string,
};

type Props = {
  firstName?: string,
  lastName?: string,
  isLoading: boolean,
  isError: boolean,
  creditCardNumber?: string,
};

class CardFormInfoContainer extends Component<Props, State> {
  state = {
    cardType: '',
  };

  componentDidMount(): void {
    this.setState({
      cardType:
        this.props.creditCardNumber &&
        +this.props.creditCardNumber.slice(13, 16) > 2000
          ? 'Master Card'
          : 'Visa',
    });
  }

  render() {
    const {
      firstName,
      lastName,
      creditCardNumber,
      isError,
      isLoading,
    } = this.props;

    return (
      <CardFormInfo
        cardType={this.state.cardType}
        firstName={firstName}
        lastName={lastName}
        creditCardNumber={creditCardNumber}
        isError={isError}
        isLoading={isLoading}
      />
    );
  }
}

const mapDispatchToProps = {
  updateCardData,
};

const mapStateToProps = state => {
  return {
    creditCardNumber: state.cardDataReducer.creditCardNumber,
    firstName: state.cardDataReducer.firstName,
    lastName: state.cardDataReducer.lastName,
    isLoading:
      state.validationStatusReducer.validationStatus ===
      ValidationStatus.Request,
    isError:
      state.validationStatusReducer.validationStatus ===
      ValidationStatus.Failure,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardFormInfoContainer);
