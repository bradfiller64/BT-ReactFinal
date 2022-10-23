import React, { useEffect } from 'react';
import axios from 'axios';
import { useContext, useState } from 'react';
import { ProductContext } from './ProductContext';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';