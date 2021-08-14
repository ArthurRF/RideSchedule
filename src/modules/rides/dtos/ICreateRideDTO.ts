interface ICreateRideDTO {
  id?: string
  name: string
  start_date: string
  start_date_registration: string
  end_date_registration: string
  additional_information?: string
  start_place: string
  participants_limit?: number
}

export { ICreateRideDTO };
