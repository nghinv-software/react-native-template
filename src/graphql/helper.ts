/**
 * Created by nghinv on Mon Sep 06 2021
 * Copyright (c) 2021 nguyennghidt6@gmail.com
 */
import { gql } from '@apollo/client';

export const EXCHANGE_RATES = gql`
 query GetExchangeRates {
   rates(currency: "USD") {
     currency
     rate
   }
 }
`;
