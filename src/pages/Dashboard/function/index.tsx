/* eslint-disable react-hooks/exhaustive-deps */
import {useCallback, useEffect, useState} from 'react';
import {useDashboard} from '../../../domain/usecase/useDashboard';
import { useIsFocused } from '@react-navigation/native';

export type TypePenggunaan = {
  Bulan: number;
  IDPelanggan: string;
  IDPenggunaan: string;
  MeterAkhir: number;
  MeterAwal: number;
  Tahun: number;
};

export type TypePelanggan = {
  Alamat: string;
  IDPelanggan: string;
  IDTarif: string;
  NamaPelanggan: string;
  NomorKWH: string;
  Password: string;
  Username: string;
};

export type TypeTagihan = {
  Bulan: number;
  IDPelanggan: string;
  IDPenggunaan: string;
  IDTagihan: string;
  JumlahMeter: number;
  Status: string;
  Tahun: number;
};

interface IProps {
  loadingPenggunaan: boolean;
  dataPenggunaan: {
    Bulan: number;
    IDPelanggan: string;
    IDPenggunaan: string;
    MeterAkhir: number;
    MeterAwal: number;
    Tahun: number;
  }[];
  loadingPelanggan: boolean;
  dataPelanggan: {
    Alamat: string;
    IDPelanggan: string;
    IDTarif: string;
    NamaPelanggan: string;
    NomorKWH: string;
    Password: string;
    Username: string;
  }[];
  loadingTagihan: boolean;
  dataTagihan: {
    Bulan: number;
    IDPelanggan: string;
    IDPenggunaan: string;
    IDTagihan: string;
    JumlahMeter: number;
    Status: string;
    Tahun: number;
  }[];
  keyExtractorPenggunaan: (_: TypePenggunaan, index: number) => string;
  keyExtractorPelanggan: (_: TypePelanggan, index: number) => string;
  keyExtractorTagihan: (_: TypeTagihan, index: number) => string;
  handleRefresh: () => void;
  refres: boolean;
}

export const useFunctionDashboard = (): IProps => {
  const {
    handlePenggunaan,
    loadingPenggunaan,
    dataPenggunaan,
    handlePelangan,
    loadingPelanggan,
    dataPelanggan,
    loadingTagihan,
    handleTagihan,
    dataTagihan,
  } = useDashboard();

  const focus = useIsFocused();

  useEffect(() => {
    handlePenggunaan(true);
    handlePelangan(true);
    handleTagihan(true);
  }, [focus]);

  const [refres, setRefresh] = useState<boolean>(false);

  const keyExtractorPenggunaan = useCallback(
    (_: TypePenggunaan, index: number) => index?.toString(),
    [],
  );
  const keyExtractorPelanggan = useCallback(
    (_: TypePelanggan, index: number) => index?.toString(),
    [],
  );
  const keyExtractorTagihan = useCallback(
    (_: TypeTagihan, index: number) => index?.toString(),
    [],
  );

  const handleRefresh = useCallback(() => {
    setRefresh(false);
    handlePenggunaan(true);
    handlePelangan(true);
    handleTagihan(true);
  }, [loadingPelanggan, loadingPenggunaan, loadingTagihan]);

  return {
    loadingPenggunaan,
    dataPenggunaan,
    loadingPelanggan,
    dataPelanggan,
    loadingTagihan,
    dataTagihan,
    keyExtractorPenggunaan,
    keyExtractorPelanggan,
    keyExtractorTagihan,
    handleRefresh,
    refres,
  };
};
