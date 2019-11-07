// @flow

import React, {useState, useEffect, useCallback, useMemo} from 'react';
import {deleteCandidate} from '../../actions/deleteCandidate';

type User = {
  id: number,
  title: string,
  userId: number,
  title: string,
  body: string,
  isSelected: boolean,
};

const useUsers = (selectedCandidates, deleteCandidate, selectCandidate) => {
  const [candidates, setCandidates] = useState(([]: User[]));
  const [value, setValue] = useState('');
  const [isRemoveButtonDisabled, setRemoveButtonEnabled] = useState(true);
  const [isAddButtonDisabled, setAddButtonEnabled] = useState(true);

  const handleInputChange = useCallback((value: string) => {
    setValue(value);
    setAddButtonEnabled(false);
  });

  useEffect(() => {
    setCandidates(selectedCandidates);
  }, [selectedCandidates]);

  const handleItemSelect = (item: User) => {
    selectCandidate(item);
    setRemoveButtonEnabled(false);
  };

  const handleRemoveItem = useCallback(() => {
    // const filteredUsers = candidates.filter((item: User) => !item.isSelected);
    //
    // setCandidates(filteredUsers);

    deleteCandidate();

    setRemoveButtonEnabled(!isRemoveButtonDisabled);
  }, [candidates, isRemoveButtonDisabled]);

  // const handleItemAdd = useCallback(() => {
  //   if (!value) {
  //     return;
  //   }
  //
  //   const newUsers = [
  //     {
  //       title: value,
  //       body: '',
  //       userId: users.length + 1,
  //       isSelected: false,
  //       id: users.length + 1,
  //     },
  //     ...users,
  //   ];
  //
  //   setCandidates(newUsers);
  // }, [value]);

  return {
    candidates,
    handleItemSelect,
    handleRemoveItem,
    // handleItemAdd,
    value,
    handleInputChange,
    isRemoveButtonDisabled,
    isAddButtonDisabled,
  };
};

export default useUsers;
