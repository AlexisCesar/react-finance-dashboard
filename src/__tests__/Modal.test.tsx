import { screen, render } from '@testing-library/react';
import { Modal } from '../components';

describe('Modal', () => {
  describe('Layout', () => {
    beforeEach(() => {
      render(<Modal setModalVisible={() => {}} />);
    });

    const setup = () => {
      const closeButton = screen.getByRole('img', { name: 'close button' });
      const headerTitle = screen.getByText('Create Transaction');
      const form = screen.getByRole('form');
      const inputName = screen.getByPlaceholderText('Name');
      const inputPrice = screen.getByPlaceholderText('Price');
      const inflowButton = screen.getByRole('button', { name: 'Inflow' });
      const outflowButton = screen.getByRole('button', { name: 'Outflow' });
      const transactionType = screen.getByText('Selected type: Inflow');
      const inputCategory = screen.getByPlaceholderText('Category');
      const createButton = screen.getByRole('button', { name: 'Create' });

      return {
        closeButton,
        headerTitle,
        form,
        inputName,
        inputPrice,
        inflowButton,
        outflowButton,
        transactionType,
        inputCategory,
        createButton,
      };
    };

    it('should displays close button', () => {
      const { closeButton } = setup();
      expect(closeButton).toBeInTheDocument();
    });

    it('should displays header title', () => {
      const { headerTitle } = setup();
      expect(headerTitle).toBeInTheDocument();
    });

    it('should displays form', () => {
      const { form } = setup();
      expect(form).toBeInTheDocument();
    });

    it('should displays transaction name input', () => {
      const { inputName } = setup();
      expect(inputName).toBeInTheDocument();
    });

    it('should displays price input', () => {
      const { inputPrice } = setup();
      expect(inputPrice).toBeInTheDocument();
    });

    it('should displays inflow button', () => {
      const { inflowButton } = setup();
      expect(inflowButton).toBeInTheDocument();
    });

    it('should displays outflow button', () => {
      const { outflowButton } = setup();
      expect(outflowButton).toBeInTheDocument();
    });

    it('should displays selected transaction type', () => {
      const { transactionType } = setup();
      expect(transactionType).toBeInTheDocument();
    });

    it('should displays category input', () => {
      const { inputCategory } = setup();
      expect(inputCategory).toBeInTheDocument();
    });

    it('should displays create button', () => {
      const { createButton } = setup();
      expect(createButton).toBeInTheDocument();
      expect(createButton).toHaveAttribute('type', 'submit');
    });
  });
});
