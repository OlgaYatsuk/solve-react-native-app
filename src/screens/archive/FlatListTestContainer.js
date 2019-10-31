import React, {Component} from 'react';

import FlatListTest from './FlatListTest2';

type Props = {};

type User = {
  id: number,
  title: string,
  userId: number,
  title: string,
  body: string,
  isSelected: boolean,
  selectedClass: string,
};

type State = {
  users: User[],
  inputValue?: string,
  isRemoveButtonDisabled: boolean,
  isAddItemButtonDisabled: boolean,
  isError: boolean
};

class FlatListTestContainer extends Component<Props, State> {
  state = {
    users: [],
    inputValue: undefined,
    isRemoveButtonDisabled: true,
    isError: false,
    isAddItemButtonDisabled: true,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(responseJson => {
        responseJson = responseJson.map(item => {
          item.isSelected = false;
          return item;
        });

        this.setState({
          users: responseJson,
        });
      })
      .catch(error => {
        this.setState({
          isError: true
        });
        console.log(error)
      });
  };

  handleItemSelect = (item) => {
    const {users} = this.state;

    const usersWithSelectedItems = users.map((user) => {
      user.id === item.id ? user.isSelected = !item.isSelected : user;
      return user
    });

    this.setState({
      users: usersWithSelectedItems,
      isRemoveButtonDisabled: false
    })
  };

  handleRemoveItem = () => {
    const {users} = this.state;

    const filteredUsers = users.filter(item => item.isSelected === false);

    this.setState({
      users: filteredUsers,
      isRemoveButtonDisabled: true,
      isAddItemButtonDisabled: true,
    });
  };

  handleInputChange = (value?: string) => {
    this.setState({
      inputValue: value,
      isAddItemButtonDisabled: false,
    });
  };

  handleItemAdd = () => {
    const {users, inputValue} = this.state;

    if (!inputValue) {
      return;
    }

    this.setState({
      users: [
        {
          title: inputValue,
          body: '',
          selectedClass: styles.list,
          userId: users.length + 1,
          isSelected: false,
          id: users.length + 1,
        },
        ...users,
      ],
      inputValue: '',
    });
  };

  render() {
    const {
      users,
      isAddItemButtonDisabled,
      isRemoveButtonDisabled,
      inputValue,
      isError
    } = this.state;

    return (
      <FlatListTest
        users={users}
        isAddItemButtonDisabled={isAddItemButtonDisabled}
        isRemoveButtonDisabled={isRemoveButtonDisabled}
        inputValue={inputValue}
        isError={isError}
        onItemAdd={this.handleItemAdd}
        onInputChange={this.handleInputChange}
        onRemoveItem={this.handleRemoveItem}
        onItemSelect={this.handleItemSelect}
      />
    );
  }
}

export default FlatListTestContainer;
