import React, { FormEvent, useLayoutEffect, useState } from 'react';
import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  Input,
  InputLabel,
  Switch,
} from '@material-ui/core';
import { DropzoneDialog } from 'material-ui-dropzone';

import Loader from '../../App/loader';
import realEstateApi from '../../utils/RealEstateApi';
import useInput from '../hooks/useInput';
import { Pagination } from '../Pagination/Pagination';

import { cnAddBuildingForm } from './cn-building';

import './index.css';

export const AddBuildingForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [formSubmit, setFormSubmit] = useState(false);

  const name = useInput('');
  const address = useInput('');
  const buildingType = useInput('');
  const overallSquare = useInput(10.0);
  const livingSquare = useInput(10.0);
  const kitchenSquare = useInput(10.0);
  const view = useInput('');
  const [decoration, setDecoration] = useState(false);
  const [balcony, setBalcony] = useState(false);

  const [inputState, setInputState] = useState({
    overallFloors: 3,
    floor: 2,
    buildingPhoto: '',
    open: false,
    files: [],
    file: [],
  });
  const [validationError, setValidationError] = useState({
    overallFloorsError: false,
    floorError: false,
  });

  useLayoutEffect(() => {
    const isAdded = localStorage.getItem(`BuildingAdded`);
    if (isAdded) {
      setFormSubmit(true);
    }
  }, [formSubmit]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(false);
    setValidationError({ floorError: false, overallFloorsError: false });

    realEstateApi
      .postData('api/v1/properties/', {
        body: {
          name: name.value,
          address: address.value,
          building_type: buildingType.value,
          overall_floors: inputState.overallFloors,
          floor: inputState.floor,
          overall_square: overallSquare.value,
          living_square: livingSquare.value,
          kitchen_square: kitchenSquare.value,
          view: view.value,
          decoration,
          balcony,
        },
      })
      .then((response) => {
        if (response.ok) {
          setFormSubmit(true);
        }
        setError(true);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));

    setInputState({
      buildingPhoto: '',
      open: false,
      files: [],
      overallFloors: 3,
      floor: 2,
      file: [],
    });
  };

  const handleDecoration = () => {
    setDecoration((prevState) => !prevState);
  };
  const handleBalcony = () => {
    setBalcony((prevState) => !prevState);
  };
  const handleOverallFloor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputState({ ...inputState, overallFloors: +event.target.value });
    if (+inputState.floor > inputState.overallFloors) {
      return setValidationError({ floorError: true, overallFloorsError: true });
    }
    return setValidationError({ floorError: false, overallFloorsError: false });
  };
  const handleFloor = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputState({ ...inputState, floor: +event.target.value });
    if (+inputState.floor > inputState.overallFloors) {
      return setValidationError({ overallFloorsError: true, floorError: true });
    }
    return setValidationError({ overallFloorsError: false, floorError: false });
  };

  const handleSavePhoto = (files: File[]): void => {
    const formData = new FormData();
    const reader = new FileReader();

    formData.append('s', files[0]);

    reader.readAsDataURL(files[0]);
    realEstateApi
      .postData('api/v1/images/', {
        body: { name: 'sad', image: reader.result },
      })
      .then(async (result) => {
        return result.json();
      });

    // reader.readAsBinaryString(files[0]);
    // const blob = reader.result;
    //
    // reader.onload = function (event) {
    //   if (blob) {
    //     formData.append('sdfsfsdfsdff', files[0]);
    //   }
    //   console.log(formData);
    // };

    setInputState(() => ({ ...inputState, open: false }));
  };

  return (
    <Container maxWidth="md">
      <h1>???????????????? ????????????????????????</h1>
      <Pagination />

      {formSubmit ? (
        <div>
          <h2>?????????????? ???? ???????????????????? ??????????????!</h2>
          <a href="/">
            <Button>?????????????? ???? ??????????????</Button>
          </a>
        </div>
      ) : (
        <div className={cnAddBuildingForm()}>
          {error && <h4 style={{ color: '#DC143C' }}>{error} ???????????? ?????? ???????????????? ??????????????</h4>}
          {loading ? (
            <Loader />
          ) : (
            <form onSubmit={handleSubmit}>
              <FormControl>
                <InputLabel htmlFor="name">???????????????? ??????????????</InputLabel>
                <Input id="name" type="text" {...name} required aria-describedby="my-helper-text" />
              </FormControl>
              <br />
              <FormControl>
                <InputLabel htmlFor="address">??????????</InputLabel>
                <Input
                  id="address"
                  type="text"
                  {...address}
                  required
                  aria-describedby="my-helper-text"
                />
              </FormControl>
              <br />
              <FormControl>
                <InputLabel htmlFor="buildingType">?????? ????????</InputLabel>
                <Input
                  id="buildingType"
                  type="text"
                  {...buildingType}
                  required
                  aria-describedby="my-helper-text"
                />
              </FormControl>
              <br />

              <FormControl>
                <Button
                  variant="outlined"
                  style={{ width: 110 }}
                  color="primary"
                  size="small"
                  onClick={() => setInputState({ ...inputState, open: true })}
                >
                  ???????????????? ??????????????????????
                </Button>

                <DropzoneDialog
                  clearOnUnmount
                  dialogTitle="?????????????????? ??????????????????????"
                  dropzoneText="?????????????????? ?????????????????????? ??????????????"
                  open={inputState.open}
                  onSave={handleSavePhoto}
                  acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                  showPreviews
                  maxFileSize={5000000}
                  onClose={() => setInputState({ ...inputState, open: false })}
                />
              </FormControl>
              <br />

              <FormControl>
                <InputLabel htmlFor="OverallFloors">?????????? ??????-???? ????????????</InputLabel>
                <Input
                  id="OverallFloors"
                  type="number"
                  value={inputState.overallFloors}
                  onChange={handleOverallFloor}
                  error={validationError.overallFloorsError}
                  aria-describedby="my-helper-text"
                />
              </FormControl>
              <br />

              <FormControl>
                <InputLabel htmlFor="Floor">????????</InputLabel>
                <Input
                  id="Floor"
                  type="number"
                  value={inputState.floor}
                  onChange={handleFloor}
                  required
                  aria-describedby="my-helper-text"
                />
              </FormControl>

              <br />

              <FormControl>
                <InputLabel htmlFor="overallSquare">?????????? ?????????????? ?? ??2</InputLabel>
                <Input
                  id="overallSquare"
                  type="text"
                  {...overallSquare}
                  required
                  aria-describedby="my-helper-text"
                />
              </FormControl>
              <br />

              <FormControl>
                <InputLabel htmlFor="livingSquare">?????????? ?????????????? ?? ??2</InputLabel>
                <Input
                  id="livingSquare"
                  type="text"
                  {...livingSquare}
                  aria-describedby="my-helper-text"
                />
              </FormControl>
              <br />

              <FormControl>
                <InputLabel htmlFor="kitchenSquare">???????????????? ?????????????? ?? ??2</InputLabel>
                <Input
                  id="kitchenSquare"
                  type="text"
                  {...kitchenSquare}
                  aria-describedby="my-helper-text"
                />
              </FormControl>
              <br />
              <FormControl>
                <InputLabel htmlFor="view">?????? ???? ????????</InputLabel>
                <Input id="view" type="text" {...view} aria-describedby="my-helper-text" />
              </FormControl>
              <br />

              <FormControl>
                <FormControlLabel
                  control={
                    <Switch color="primary" checked={decoration} onChange={handleDecoration} />
                  }
                  label="??????????????"
                  labelPlacement="end"
                />
                <FormControlLabel
                  control={<Switch color="primary" checked={balcony} onChange={handleBalcony} />}
                  label="???????????? ?????? ????????????"
                  labelPlacement="end"
                />
              </FormControl>
              <br />
              <Button
                style={{ width: 150 }}
                variant="contained"
                size="medium"
                color="primary"
                type="submit"
              >
                ???????????????????? ????????????
              </Button>
            </form>
          )}
        </div>
      )}
    </Container>
  );
};
