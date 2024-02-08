export function isAlpha(str) {
    return str.match(/^[a-zA-Z]+$/)
}

export function isEmail(str) {
    // eslint-disable-next-line
    return str.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
}

export const statesList = [
    { abbreviation: "AL", state: "Alabama" },
    { abbreviation: "AK", state: "Alaska" },
    { abbreviation: "AZ", state: "Arizona" },
    { abbreviation: "AR", state: "Arkansas" },
    { abbreviation: "CA", state: "California" },
    { abbreviation: "CO", state: "Colorado" },
    { abbreviation: "CT", state: "Connecticut" },
    { abbreviation: "DE", state: "Delaware" },
    { abbreviation: "FL", state: "Florida" },
    { abbreviation: "GA", state: "Georgia" },
    { abbreviation: "HI", state: "Hawaii" },
    { abbreviation: "ID", state: "Idaho" },
    { abbreviation: "IL", state: "Illinois" },
    { abbreviation: "IN", state: "Indiana" },
    { abbreviation: "IA", state: "Iowa" },
    { abbreviation: "KS", state: "Kansas" },
    { abbreviation: "KY", state: "Kentucky" },
    { abbreviation: "LA", state: "Louisiana" },
    { abbreviation: "ME", state: "Maine" },
    { abbreviation: "MD", state: "Maryland" },
    { abbreviation: "MA", state: "Massachusetts" },
    { abbreviation: "MI", state: "Michigan" },
    { abbreviation: "MN", state: "Minnesota" },
    { abbreviation: "MS", state: "Mississippi" },
    { abbreviation: "MO", state: "Missouri" },
    { abbreviation: "MT", state: "Montana" },
    { abbreviation: "NE", state: "Nebraska" },
    { abbreviation: "NV", state: "Nevada" },
    { abbreviation: "NH", state: "New Hampshire" },
    { abbreviation: "NJ", state: "New Jersey" },
    { abbreviation: "NM", state: "New Mexico" },
    { abbreviation: "NY", state: "New York" },
    { abbreviation: "NC", state: "North Carolina" },
    { abbreviation: "ND", state: "North Dakota" },
    { abbreviation: "OH", state: "Ohio" },
    { abbreviation: "OK", state: "Oklahoma" },
    { abbreviation: "OR", state: "Oregon" },
    { abbreviation: "PA", state: "Pennsylvania" },
    { abbreviation: "RI", state: "Rhode Island" },
    { abbreviation: "SC", state: "South Carolina" },
    { abbreviation: "SD", state: "South Dakota" },
    { abbreviation: "TN", state: "Tennessee" },
    { abbreviation: "TX", state: "Texas" },
    { abbreviation: "UT", state: "Utah" },
    { abbreviation: "VT", state: "Vermont" },
    { abbreviation: "VA", state: "Virginia" },
    { abbreviation: "WA", state: "Washington" },
    { abbreviation: "WV", state: "West Virginia" },
    { abbreviation: "WI", state: "Wisconsin" },
    { abbreviation: "WY", state: "Wyoming" }
    ]
