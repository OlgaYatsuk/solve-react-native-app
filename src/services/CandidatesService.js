import axios from 'axios/index';

class CandidatesService {
  fetchCandidates = amount => {
    return axios.get(
      `https://randomuser.me/api/?results=${amount}&inc=name,email,picture,nat=us,dk,fr,gb`,
    );
  };
}

const candidatesService = new CandidatesService();

export {candidatesService};
