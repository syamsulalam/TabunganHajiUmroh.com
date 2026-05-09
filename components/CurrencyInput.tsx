'use client';

import React from 'react';

interface CurrencyInputProps {
  value: number;
  onChange: (value: number) => void;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}

export function CurrencyInput({ value, onChange, className, placeholder, disabled }: CurrencyInputProps) {
  const formatRupiah = (val: string) => {
    const numberString = val.replace(/[^,\d]/g, '').toString();
    if (!numberString) return '';
    const split = numberString.split(',');
    const sisa = split[0].length % 3;
    let rupiah = split[0].substring(0, sisa);
    const ribuan = split[0].substring(sisa).match(/\d{3}/gi);

    if (ribuan) {
      const separator = sisa ? '.' : '';
      rupiah += separator + ribuan.join('.');
    }

    rupiah = split[1] !== undefined ? rupiah + ',' + split[1] : rupiah;
    return `Rp ${rupiah}`;
  };

  const displayValue = value ? formatRupiah(value.toString()) : '';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let rawVal = e.target.value.replace(/[^,\d]/g, '');
    if (rawVal === '') {
      onChange(0);
      return;
    }
    const numVal = parseInt(rawVal, 10);
    onChange(numVal);
  };

  return (
    <input
      type="text"
      value={displayValue}
      onChange={handleChange}
      className={className}
      placeholder={placeholder || 'Rp 0'}
      disabled={disabled}
      title="" // prevent browser default tooltip if any
    />
  );
}
