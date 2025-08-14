import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useBlacklistStore } from '@/store/blacklistStore';
import { useState } from 'react';
import { AddUserBlackList } from './addUserBlackList';

export const EditUserBlackList = () => {
  const { getBlacklistById } = useBlacklistStore();
  const [data, setData] = useState(null);

  const { id } = useParams();

  const getUserById = async () => {
    const user = await getBlacklistById(id);
    setData(user);
  };

  useEffect(() => {
    getUserById();
  },[]);

  return <AddUserBlackList user={data} />;
};
