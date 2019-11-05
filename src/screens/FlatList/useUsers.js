// @flow

import React, {useState, useEffect, useCallback, useMemo} from 'react';

type User = {
  id: number,
  title: string,
  userId: number,
  title: string,
  body: string,
  isSelected: boolean,
};

const useUsers = () => {
  const [users, setUsers] = useState(([]: User[]));
  const [value, setValue] = useState('');
  const [isRemoveButtonDisabled, setRemoveButtonEnabled] = useState(true);
  const [isAddButtonDisabled, setAddButtonEnabled] = useState(true);

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(responseJson => {
        responseJson = responseJson.map(item => {
          item.isSelected = false;
          return item;
        });
        setUsers(responseJson);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleInputChange = useCallback((value: string) => {
    setValue(value);
    setAddButtonEnabled(false);
  });

  useEffect(() => {
    fetchData();
  }, []);

  const handleItemSelect = (item: User) => {
    const usersWithSelectedItems = users.map(user => {
      return user.id === item.id
        ? {...user, isSelected: !item.isSelected}
        : user;
    });

    setUsers(usersWithSelectedItems);
    setRemoveButtonEnabled(false);
  };

  const handleRemoveItem = useCallback(() => {
    const filteredUsers = users.filter((item: User) => !item.isSelected);

    setUsers(filteredUsers);

    setRemoveButtonEnabled(!isRemoveButtonDisabled);
  }, [users, isRemoveButtonDisabled]);

  const handleItemAdd = useCallback(() => {
    if (!value) {
      return;
    }

    const newUsers = [
      {
        title: value,
        body: '',
        userId: users.length + 1,
        isSelected: false,
        id: users.length + 1,
      },
      ...users,
    ];

    setUsers(newUsers);
  }, [value]);

  return {
    users,
    handleItemSelect,
    handleRemoveItem,
    handleItemAdd,
    value,
    handleInputChange,
    isRemoveButtonDisabled,
    isAddButtonDisabled,
  };
};

export default useUsers;
