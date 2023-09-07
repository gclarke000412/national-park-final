
import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { choosePark_name, chooseState, chooseFounded, choosePopularity, chooseBeauty } from "../redux/slices/RootSlice"

interface ParkFormProps {
  id?: string[];
  onClose: () => void;
}

const ParkForm = ( props:ParkFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.year } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()
    } else {
      dispatch(choosePark_name(data.park_name));
      dispatch(chooseState(data.state));
      dispatch(chooseFounded(data.founded));
      dispatch(choosePopularity(data.popularity));
      dispatch(chooseBeauty(data.beauty));


      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 1000);
      event.target.reset()

      props.onClose();
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="park_name">Park name</label>
          <Input {...register('park_name')} name='park_name' placeholder="Park Name" />
        </div>
        <div>
          <label htmlFor="state">Park State</label>
          <Input {...register('state')} name='state' placeholder="State" />
        </div>
        <div>
          <label htmlFor="founded">Year founded</label>
          <Input {...register('founded')} name='founded' placeholder="Founded" />
        </div>
        <div>
          <label htmlFor="popularity">Popularity / 10</label>
          <Input {...register('popularity')} name='popularity' placeholder="Popularity" />
        </div>
        <div>
          <label htmlFor="beauty">Beauty / 10</label>
          <Input {...register('beauty')} name='beauty' placeholder="Beauty" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ParkForm